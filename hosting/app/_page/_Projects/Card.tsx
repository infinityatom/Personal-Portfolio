import React, { FC, ForwardedRef, HTMLAttributes, ReactComponentElement, ReactElement, ReactNode, forwardRef } from 'react'

import './Card.css'
import clsx from 'clsx'

import './Card.css'

const Root = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((
	{ className, ...props }, ref
) => (
	<article
		ref={ref}
		className={clsx('Card', className)}
		{...props}
	/>
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