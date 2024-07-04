console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => card.id.includes("2"));
console.log("only card with id 2:", onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => card.tags.length === 3);
console.log("all cards with 3 tags:", allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter(
  (card) => card.isBookmarked === false
);
// const allCardsThatAreNotBookmarked = cards.filter((card) => !card.isBookmarked);
console.log("not bookmarked:", allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    (card.tags.includes("html") || card.tags.includes("js")) &&
    card.isBookmarked === true
  );
});
console.log("tags and bookmarked:", allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
