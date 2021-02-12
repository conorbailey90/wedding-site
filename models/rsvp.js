import mongoose from 'mongoose'

const RsvpSchema = new mongoose.Schema({
  name: {
    /* Name of guest */
    type: String,
    required: [true, 'Please provide full name.'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  email: {
    /* Guest email */
    type: String,
    required: [true, "Please provide email address"],
    maxlength: [200, "Email address cannot be more than 200 characters"],
  },
  phone: {
    /* Phone number */
    type: String,
    required: [true, 'Please enter phone number.'],
    maxlength: [30, 'Please enter a correct phone number.'],
  },
  option: {
    /* Meal option */
    type: String,
    required: [true, 'Select meal option.'],
    maxlength: [30, 'Please enter a correct option.'],
  },
  requirements: {
    type: String,
    maxlength: [200, '200 Characters only']
  }
})

export default mongoose.models.RSVP || mongoose.model('RSVP', RsvpSchema)