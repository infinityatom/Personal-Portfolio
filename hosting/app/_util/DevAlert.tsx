'use client'

import { useEffect, useState } from "react";

import * as AlertDialog from '@radix-ui/react-alert-dialog';

type Props = {}

import './DevAlert.css'

export default function DevAlert({ }: Props) {

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
    setIsOpen(true);
  }, []);

	return <>
		<AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialog.Trigger className='AlertDialogButton violet'>
				Still in development
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className="AlertDialogOverlay" />
				<AlertDialog.Content className="AlertDialogContent">
					<AlertDialog.Title className="AlertDialogTitle">Project in development!!!</AlertDialog.Title>
					<AlertDialog.Description className="AlertDialogDescription">
						I am working hard building something special for you!<br />
						Check back soon for the finished site. In the meantime, check the my personal resume and I hope to hear from you!
					</AlertDialog.Description>
					<AlertDialog.Cancel className="AlertDialogButton mauve">Close</AlertDialog.Cancel>
					<AlertDialog.Action className='AlertDialogButton green' asChild>
						<a href="./Riccardo Bodnarescu's resume.pdf" target='_blank'>
							View resume
						</a>
					</AlertDialog.Action>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	</>

}