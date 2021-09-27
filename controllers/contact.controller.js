import express from "express";
import Contact from "../models/contact.model.js";
import Mobile from "../models/phoneNumber.model.js";
import Address from "../models/address.model.js";

const route = express.Router();

route.post("/createContact", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const middleName = req.body.middleName;

  const addressType = req.body.addressType;
  const streetName = req.body.streetName;
  const streetNumber = req.body.streetNumber;
  const apartmentNumber = req.body.apartmentNumber;
  const city = req.body.city;
  const postalCode = req.body.postalCode;
  const country = req.body.country;

  const mobileType = req.body.mobileType;
  const countryCode = req.body.countryCode;
  const phoneNumber = req.body.phoneNumber;
  const areaCode = req.body.areaCode;

  const contact = await new Contact({
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
  });
  const address = await new Address({
    type: addressType,
    streetName: streetName,
    streetNumber: streetNumber,
    apartmentNumber: apartmentNumber,
    city: city,
    postalCode: postalCode,
    country: country,
  });
  const mobile = await new Mobile({
    type: mobileType,
    countryCode: countryCode,
    phoneNumber: phoneNumber,
    areaCode: areaCode,
  });

  contact.addresses.push(address);
  contact.mobiles.push(mobile);

  try {
    await address.save();
    await mobile.save();
    await contact.save();
    res.json({ msg: "conatct created" });
  } catch (err) {
    res.status(400).json({ err: "something went wrong" });
  }
});

route.delete("/deleteContact", async (req, res) => {
  const contactId = req.query.contactId;
  await Contact.findByIdAndDelete(contactId);
  res.json({ msg: "deleted" });
});

route.get("/list", async (req, res) => {
  const contacts = await Contact.find()
    .populate("addresses")
    .populate("mobiles");
  console.log(contacts, "ss");
  res.json({ contacts: contacts });
});
export default route;
