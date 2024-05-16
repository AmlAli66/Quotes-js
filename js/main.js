var quoteBtn = document.getElementById("generate-button");
var quoteBox = document.getElementById("quotes-box");
var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");

var quotes = [
    {
        quote:
            "I have not failed.I've just found 10,000 ways that won't work.", author: "-Thomas A.Edison"
    },
    {
        quote:
            "“That which does not kill us makes us stronger.”", author: "-Thomas A.Edison"
    },
    {
        quote:
            "“That which does not kill us makes us stronger.”", author: "-Friedrich Nietzsche"
    },
    {
        quote:

            "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”", author: "-Friedrich Nietzsche"
    },
    {
        quote:
            "“The man who does not read has no advantage over the man who cannot read.”", author: "-Mark Twain"
    },
    {
        quote:
            `“A woman is like a tea bag; you never know how strong it is until it's in hot water.”`, author: "- Eleanor Roosevelt"
    },
    {
        quote:
            `“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”`, author: "-Douglas adams"
    },
    {
        quote:
            `“If you don't stand for something you will fall for anything.”`, author: "-Gordon A. Eadie "
    },
    {
        quote:
            `“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”`, author: "-Dr. Seuss"
    },
    {
        quote:
            `“Never put off till tomorrow what may be done day after tomorrow just as well.”`, author: "-Mark Twain "
    }
];

var checkLastQuote = 0;
quoteBtn.onclick = function () {
    generateNoRepeat();
    console.log(`quote ${checkLastQuote}`)
}

function generateNoRepeat() {
    var randomNum;
    do {
        randomNum = Math.floor(Math.random() * quotes.length);
    } while (randomNum === checkLastQuote);
    checkLastQuote = randomNum;
    quoteText.innerHTML = quotes[randomNum].quote
    quoteAuthor.innerHTML = quotes[randomNum].author;
    console.log(`quote ${randomNum}`)


}