import express from "express";
import { killPortProcess } from "kill-port-process";
import multer from "multer";
import { FormDataWrapper } from "../..";
import { getFetchFn } from "../getFetchFn";

describe("Multipart Form Data Tests", () => {
    let app;

    beforeAll(async () => {
        app = express();

        const storage = multer.memoryStorage();
        const upload = multer({ storage: storage });

        // Define the file upload route
        app.post("/upload", upload.any(), (req, res) => {
            try {
                if (!req.files) {
                    return res.status(400).send("No file uploaded.");
                } else {
                    const file = req.files && (req.files as any[])[0];
                    return res.status(200).send(`File sent: ${file.originalname}`);
                }
            } catch (error) {
                console.log(error);
                res.status(500).send("Error uploading file.");
            }
            return res.status(200).send("File uploaded successfully.");
        });

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.listen(4567, () => {
            console.log("Server started on http://localhost:4567");
        });
    });

    it("should return a 200 status code", async () => {
        const fdw = new FormDataWrapper();

        await fdw.append("file", new Blob(["test"]), "test.txt");

        const request = await fdw.getRequest();

        let fetch = await getFetchFn();

        const response = await fetch("http://localhost:4567/upload", {
            method: "POST",
            body: await request.getBody(),
            headers: await request.getHeaders()
        });

        expect(response.status).toBe(200);
    });

    afterAll(async () => {
        setTimeout(async () => await killPortProcess(4567), 500);
    });
});
