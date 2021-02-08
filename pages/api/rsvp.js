import dbConnect from '../../utils/dbConnect'
import RSVP from '../../models/rsvp'

export default async function handler(req, res) {
  const { method } = req;

  console.log(method);

  await dbConnect();

  switch(method){
    case "GET":
      try {
        const guests = await RSVP.find({}) /* find all the data in our database */
        res.status(200).json({success: true, data: guests });

      }catch(error){
        res.status(400).json({success: false})
      }
      break
      case "POST":
        try{
          console.log('here');
          console.log(req.body)
          const guest = await RSVP.create(
           
            req.body
          )
          res.status(201).json({success: true, data: guest});
        }catch(error){
          console.log(error)
          res.status(400).json({success: false, err: error})
        }
        break
      default:
        res.status(400).json({success: false})
        break
  }
  

}