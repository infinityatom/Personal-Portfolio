import React, { ForwardedRef, HTMLAttributes, forwardRef } from 'react'

import './Card.css'
import clsx from 'clsx'
import Link from 'next/link'
import { UrlObject } from 'url'

interface Props extends HTMLAttributes<HTMLElement> {
	href: string | UrlObject,
}

const Root = ((
	{ className, href, ...props }: Props,
) => (
	<Link className='link' href={href}>
		<article
			className={clsx('Card', className)}
			{...props}
		/>
	</Link>
))

const Header = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((
	{ className, ...props }, ref
) => (
	<header
		ref={ref}
		className={clsx('Header', className)}
		{...props}
	/>
))

const Title = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>((
	{ className, ...props }, ref
) => (
	<h1
		ref={ref}
		className={clsx('Title', className)}
		{...props}
	/>
))

const Subtitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>((
	{ className, ...props }, ref
) => (
	<h2
		ref={ref}
		className={clsx('Subtitle', className)}
		{...props}
	/>
))

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((
	{ className, ...props }, ref
) => (
	<div
		ref={ref}
		className={clsx('Content', className)}
		{...props}
	/>
))

export { Root, Header, Title, Subtitle, Content }