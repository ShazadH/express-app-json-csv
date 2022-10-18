import express from 'express';
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.get('/', (req, res)=>{
    const fs = require("fs");

    // Lecture du JSON en locale 
    fs.readFile("./submissions_demo1.json", "utf8", (err:any, jsonString:any) => {
      if (err) {
        console.log("Error reading file from disk:", err);
        return;
      }
      try {
        const customer = JSON.parse(jsonString);
        // console.log(jsonString);
        console.log("Enseigne:", customer[0].enseigne); // => "Customer address is: Infinity Loop Drive"
        res.send({"result": customer[0]});
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
  });
});

// export default router;
module.exports = router;