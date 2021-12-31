const { v4: uuid } = require("uuid");

const CARAT_PRICE = 100;
const diamondsSubmitted = [];
const PricingEngine = {
  cut: {
    round: 2,
    princess: 2.5,
  },
  color: {
    d: 1.5,
    e: 1.3,
  },
  clarity: {
    fl: 15,
    if: 13,
  },
};

const computeSimilarity = (diamond, compareDiamond) => {
  let similarity = 0;
  if (diamond.carat === compareDiamond.carat) {
    similarity = similarity + 1;
  }
  if (diamond.cut === compareDiamond.cut) {
    similarity = similarity + 1;
  }
  if (diamond.color === compareDiamond.color) {
    similarity = similarity + 1;
  }
  if (diamond.clarity === compareDiamond.clarity) {
    similarity = similarity + 1;
  }
  return similarity;
};
const calculateDiamondPrice = (diamond) => {
  const { carat, color, cut, clarity } = diamond;
  return (
    carat *
    CARAT_PRICE *
    PricingEngine.color[color] *
    PricingEngine.cut[cut] *
    PricingEngine.clarity[clarity]
  );
};
const getSimilarDiamonds = (diamond) => {
  const similarDiamonds = [];
  diamondsSubmitted.forEach((d) => {
    const similarity = computeSimilarity(d, diamond);
    if (similarity >= 2) {
      similarDiamonds.push({ diamond: d, similarity });
    }
  });

  // sorting by similarity & returning up to 4
  return similarDiamonds
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 4);
};

const calculateDiamond = (req, res) => {
  const diamond = req.query;
  const { color, cut, clarity, carat } = diamond;
  // time-out to fake out a real response
  setTimeout(() => {
    const price = calculateDiamondPrice(diamond);
    const similarDiamonds = getSimilarDiamonds(diamond);
    diamondsSubmitted.push({ price, ...diamond, id: uuid() });
    return res.status(200).json({ similarDiamonds, price });
  }, [1500]);
};

module.exports = calculateDiamond;
