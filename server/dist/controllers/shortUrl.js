import { urlModel } from '../model/shortUrl.js';
export const createUrl = async (req, res) => {
    try {
        console.log(req.body.fullUrl);
        // checking if the url already exists
        const { fullUrl } = req.body;
        const urlFound = await urlModel.find({ fullUrl });
        if (urlFound.length > 0) {
            return res.status(409);
            return res.send(urlFound);
        }
        else {
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(201).send(shortUrl);
        }
    }
    catch (error) {
        res.status(500).send({ message: 'something went wrong' });
    }
};
export const getAllUrl = async (req, res) => {
    try {
        const shortUrls = await urlModel.find();
        if (shortUrls.length < 0) {
            return res.status(404).send({ message: 'No urls found' });
        }
        else {
            res.status(200).send(shortUrls);
        }
    }
    catch (error) {
        res.status(500).send({ message: 'something went wrong' });
    }
};
export const getUrl = async (req, res) => { };
export const deleteUrl = async (req, res) => { };
//# sourceMappingURL=shortUrl.js.map