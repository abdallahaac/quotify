// Import necessary libraries
const express = require("express");
const { FieldValue } = require("firebase-admin/firestore");

// Set up the Express app
const app = express();
const port = 3000;

// Connect to Firestore database
const { db } = require("./firebase.js");

// Use JSON middleware for handling request bodies
app.use(express.json());

// Define the list of authors
const authors = {
	james: "friend",
	larry: "friend",
	lucy: "friend",
	banana: "enemy",
};

// Define a route for getting all quotes
app.get("/", async (req, res) => {
	// Retrieve the "author" document from the "quotes" collection in Firestore
	res.send("Hello!");
	// If the document does exist, send its data as the response body with a 200 status code
	res.status(200).send(doc.data());
});

app.post("/addAuthor", async (req, res) => {
	const { author, quotes } = req.body;

	// get reference to the author's document
	const authorRef = db.collection("authors").doc(author);
	const doc = await authorRef.get();

	if (!doc.exists) {
		// if the author doesn't exist, create a new document with the author and quotes
		const newAuthor = await authorRef.set({
			author,
			quotes: [quotes],
		});
	} else {
		// if the author exists, append the new quote to the existing quotes array
		const existingQuotes = doc.data().quotes;
		const updatedQuotes = [...existingQuotes, quotes];
		const update = await authorRef.update({
			quotes: updatedQuotes,
		});
	}

	res.status(200).send({ message: "Quote added successfully." });
});

// Start the Express server and listen for incoming requests on the specified port
app.listen(port, () => console.log(`Server has started on port: ${port}`));
