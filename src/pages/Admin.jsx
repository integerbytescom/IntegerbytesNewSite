import React from 'react';
import Main from "./Main";

const Admin = ({lang}) => {
    return (
        <div className={"Admin"}>
            <Main lang={lang} admin={false} />
        </div>
    );
};

export default Admin;
