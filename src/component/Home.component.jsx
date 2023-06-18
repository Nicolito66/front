import React from "react";
import {RegisterComponent} from "./Register.component";
import {LoginComponent} from "./Login.component";

export function HomeComponent() {


    return (<div>
            <RegisterComponent/>
            <LoginComponent/>
    </div>);
}