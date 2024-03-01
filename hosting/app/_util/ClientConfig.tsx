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
		const analytics = getAnalytics(FirebaseApp);
	})

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.registerPlugin(CustomEase)
		gsap.registerPlugin(Flip)
	})

	return <></>
}