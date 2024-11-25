const mongoose=require("mongoose");
const initData=require("C:\\Users\\HP\\Desktop\\Major_project\\init\\data.js");
const Listing=require("C:\\Users\\HP\\Desktop\\Major_project\\models\\listing.js");

const MONGO_URL="mongodb://127.0.0.1/wanderlust";

main ()
.then(()=>{
    console.log("connected to DB");
}
)
.catch((err)=>
{
console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);}

    const initDB = async () => {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({...obj, owner:"673591cb6105069f0648a783"}));
        await Listing.insertMany(initData.data);
        console.log("data was initialized");
      };
    initDB();