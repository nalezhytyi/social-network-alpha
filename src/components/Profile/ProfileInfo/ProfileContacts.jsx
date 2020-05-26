import React from "react";
import s from "./ProfileInfo.module.css";
import IconButton from "@material-ui/core/IconButton";
import { Facebook, GitHub, Instagram, Language, Twitter, YouTube, Link } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}>
        <IconButton href={contactValue} target='_blank'>
            {(contactTitle === "facebook") && <Facebook />}
            {(contactTitle === "website") && <Language />}
            {(contactTitle === "vk") && <FontAwesomeIcon icon={['fab', 'vk']} />}
            {(contactTitle === "twitter") && <Twitter />}
            {(contactTitle === "instagram") && <Instagram />}
            {(contactTitle === "youtube") && <YouTube />}
            {(contactTitle === "github") && <GitHub />}
            {(contactTitle === "mainLink") && <Link />}
        </IconButton>
    </div>
};

const ProfileContacts = ({ profile }) => {
    return <div>
        {Object.keys(profile.contacts).filter((is) => {
            return profile.contacts[is] != null && profile.contacts[is] !== ""
        }).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </div>
};

export default ProfileContacts
