const BIZ={name:"Shree Neem Karoli Baba Car & Bike Rent",phone:"9762926088",wa:"919762926088",addr:"Tikoniya, Haldwani, Nainital, Uttarakhand"};
// NOTE: prices/specs are sample values - edit here and all pages update.
const V=[
{id:"tata-punch",type:"car",name:"Tata Punch",img:"punch-1",imgs:["punch-1"],price:1800,tag:"Best Seller",seats:5,fuel:"Petrol",trans:"Manual",spec:{Engine:"1.2L Petrol",Boot:"366 L",Mileage:"~18 km/l",AC:"Yes"},desc:"Compact SUV with high ground clearance - perfect for Nainital, Bhimtal and Mukteshwar hill roads."},
{id:"nissan-magnite",type:"car",name:"Nissan Magnite",img:"magnite-1",imgs:["magnite-1","magnite-2","magnite-3"],price:2000,tag:"Family Pick",seats:5,fuel:"Petrol",trans:"Manual",spec:{Engine:"1.0L Petrol",Boot:"336 L",Mileage:"~18 km/l",AC:"Yes"},desc:"Stylish sub-4m SUV, comfortable for family trips across Kumaon with self drive."},
{id:"maruti-dzire",type:"car",name:"Maruti Dzire",img:"dzire",imgs:["dzire"],price:1600,tag:"Budget",seats:5,fuel:"Petrol",trans:"Manual",spec:{Engine:"1.2L Petrol",Boot:"378 L",Mileage:"~22 km/l",AC:"Yes"},desc:"Mileage-friendly sedan with big boot - ideal for Haldwani to Nainital and Corbett runs."},
{id:"maruti-fronx",type:"car",name:"Maruti Fronx",img:"fronx-1",imgs:["fronx-1","fronx-2"],price:2200,tag:"Premium",seats:5,fuel:"Petrol",trans:"Manual",spec:{Engine:"1.2L Petrol",Boot:"308 L",Mileage:"~20 km/l",AC:"Yes"},desc:"Sporty coupe-SUV with a smooth drive and modern features for a premium trip."},
{id:"renault-kiger",type:"car",name:"Renault Kiger",img:"kiger",imgs:["kiger"],price:1900,tag:"",seats:5,fuel:"Petrol",trans:"Manual",spec:{Engine:"1.0L Petrol",Boot:"405 L",Mileage:"~18 km/l",AC:"Yes"},desc:"Roomy compact SUV with a large boot - great for luggage-heavy family tours."},
{id:"re-himalayan",type:"bike",name:"Royal Enfield Himalayan",img:"himalayan-gold",imgs:["himalayan-gold","himalayan-gold-2","himalayan-grey"],price:1800,tag:"Adventure King",seats:2,fuel:"Petrol",trans:"Manual",spec:{Engine:"411 cc",Mileage:"~30 km/l",Weight:"199 kg",Type:"Adventure"},desc:"Built for the mountains. Luggage-ready and stable on every Kumaon trail."},
{id:"re-hunter-350",type:"bike",name:"Royal Enfield Hunter 350",img:"hunter-1",imgs:["hunter-1","hunter-2","hunter-3"],price:1200,tag:"Popular",seats:2,fuel:"Petrol",trans:"Manual",spec:{Engine:"349 cc",Mileage:"~36 km/l",Weight:"181 kg",Type:"Roadster"},desc:"Light, agile and easy to handle - the most loved city and highway cruiser."},
{id:"re-meteor-350",type:"bike",name:"Royal Enfield Meteor 350",img:"meteor-1",imgs:["meteor-1","meteor-2","meteor-3"],price:1400,tag:"Cruiser",seats:2,fuel:"Petrol",trans:"Manual",spec:{Engine:"349 cc",Mileage:"~35 km/l",Weight:"191 kg",Type:"Cruiser"},desc:"Relaxed cruiser with a smooth engine - comfortable for long Kumaon highway rides."},
{id:"re-classic",type:"bike",name:"Royal Enfield Classic",img:"classic-1",imgs:["classic-1","classic-2"],price:1300,tag:"",seats:2,fuel:"Petrol",trans:"Manual",spec:{Engine:"349 cc",Mileage:"~35 km/l",Weight:"195 kg",Type:"Retro Cruiser"},desc:"The timeless thump. Classic styling with rider comfort for two."},
{id:"hero-xpulse",type:"bike",name:"Hero XPulse 200",img:"xpulse",imgs:["xpulse"],price:900,tag:"Lightweight",seats:2,fuel:"Petrol",trans:"Manual",spec:{Engine:"199 cc",Mileage:"~40 km/l",Weight:"154 kg",Type:"Dual-sport"},desc:"Light off-road ready bike, great for beginners and rough mountain tracks."}
];
const TOURS=[
{n:"Kainchi Dham",d:"Haldwani - Kainchi Dham",km:"38 km",t:"1 Day",img:"ride-6",best:"Car / Bike",txt:"Visit the sacred ashram of Neem Karoli Baba amid pine forests."},
{n:"Nainital",d:"Haldwani - Nainital",km:"35 km",t:"1-2 Days",img:"ride-2",best:"Car / Bike",txt:"Naini Lake, Mall Road, Snow View and Tiffin Top."},
{n:"Bhimtal & Sattal",d:"Haldwani - Bhimtal - Sattal",km:"30 km",t:"1 Day",img:"ride-4",best:"Bike",txt:"Quiet lakes, boating and lush oak forests."},
{n:"Mukteshwar",d:"Haldwani - Mukteshwar",km:"75 km",t:"2 Days",img:"himalayan-gold-2",best:"Himalayan / SUV",txt:"Himalayan views, orchards and the Chauli Ki Jali cliff."},
{n:"Ranikhet & Kausani",d:"Haldwani - Ranikhet - Kausani",km:"120 km",t:"3 Days",img:"ride-5",best:"Car / Bike",txt:"Panchachuli peaks, tea gardens and Gandhi Ashram."},
{n:"Jim Corbett",d:"Haldwani - Ramnagar - Corbett",km:"65 km",t:"2 Days",img:"magnite-3",best:"Car",txt:"Jungle safari, Corbett Falls and Garjiya Devi temple."}
];
const REV=[
["Rahul Sharma","Delhi","Took the Himalayan for a 3 day Mukteshwar trip. Bike was in top condition and the owner was very helpful."],
["Priya Mehta","Noida","Booked Magnite for family. Clean car, no hidden charges and quick pickup in Haldwani."],
["Aman Rawat","Dehradun","Best rental in Haldwani. Hunter 350 was smooth and the price was fair. Will rent again."],
["Sneha Gupta","Lucknow","Visited Kainchi Dham with Dzire. Good mileage, comfortable and the support team was always reachable."],
["Vikas Bisht","Haldwani","Group of 4 took bikes for a Nainital ride. Great service, helmets provided."],
["Karan Joshi","Gurugram","Smooth booking over WhatsApp. Punch handled hill roads easily. Recommended!"]
];
const FAQ=[
["Which documents are required?","A valid driving licence and an Aadhaar card / ID proof. Foreigners need a passport and international licence."],
["Is a security deposit taken?","Yes, a refundable security deposit is taken at pickup and returned when the vehicle comes back in good condition."],
["Is there a km limit?","A daily km limit applies. Extra km are charged per km. Ask on WhatsApp for current limits."],
["Do you provide helmets?","Yes, helmets are provided with every bike booking at no extra cost."],
["Can I take the vehicle outside Uttarakhand?","Please inform us before booking. Kumaon tours with self drive are our speciality."],
["How do I book?","Choose a vehicle, fill the booking form and confirm on WhatsApp or call us directly."]
];
