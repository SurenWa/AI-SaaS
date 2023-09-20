"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("4b50c98e-7f58-4806-91c1-ecc2da8eb3a8");
    }, []);

    return null;
};