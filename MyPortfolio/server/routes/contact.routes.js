import express from "express";
import contactCtrl from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/api/contacts")
    .get(contactCtrl.list)
    .post(authCtrl.requireSignin, authCtrl.requireAdmin, contactCtrl.create);

router.param("contactId", contactCtrl.contactByID);

router.route("/api/contacts/:contactId")
    .get(contactCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.requireAdmin, contactCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.requireAdmin, contactCtrl.remove);

export default router;