'use client'

import React, { useEffect } from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/ScrollTrigger"

import { FirebaseApp } from './firebase'
import { getAnalytics } from "firebase/analytics";


export default function ClientConfig() {
	useEffect(() => {
		const analytics = getAnalytics(FirebaseApp);
	})

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
	})

	return <></>
}