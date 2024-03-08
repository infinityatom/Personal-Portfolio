'use client'

import React, { useEffect } from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/ScrollTrigger"
import CustomEase from 'gsap/CustomEase'
import Flip from 'gsap/Flip';

import { FirebaseApp } from './firebase'
import { getAnalytics } from "firebase/analytics";


export default function ClientConfig() {
	useEffect(() => {
		// if (process.env.NODE_ENV === "development") {
			getAnalytics(FirebaseApp);
		// }
	})

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.registerPlugin(CustomEase)
		gsap.registerPlugin(Flip)
	})

	return <></>
}