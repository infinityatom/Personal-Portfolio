'use client'

import { RefObject, useEffect, useMemo } from "react";
import CustomNode, { DiagramTable } from "./CustomNode";
import ReactFlow,
{
	Node,
	Edge,
	Background,
	BackgroundVariant,
	useReactFlow,
	useStoreApi,
} from 'reactflow';

type Props = {
	cardRef: RefObject<HTMLDivElement>
}

const nodeTypes = { customNode: CustomNode };

const initialNodes: Node<DiagramTable>[] = [
	{
		id: '1', position: { x: 0, y: 0 }, type: 'customNode',
		data: {
			label: 'User',
			rows: [
				{ name: 'id', type: 'int', handlers: [{ position: 'right', type: 'source' }] },
				{ name: 'user_name', type: 'varchar(50)' },
				{ name: 'gender', type: 'char(5)' },
				{ name: 'email', type: 'varchar(250)' },
			],
		}
	},
	{
		id: '2', position: { x: 337.26, y: 0 }, type: 'customNode',
		data: {
			label: 'Favourite',
			rows: [
				{ name: 'user_id', type: 'int', handlers: [{ position: 'left', type: 'target' }] },
				{ name: 'movie_id', type: 'int', handlers: [{ position: 'left', type: 'target' }] },
			],
		}
	},
	{
		id: '3', position: { x: 337.92, y: 157.52 }, type: 'customNode',
		data: {
			label: 'Movie',
			rows: [
				{ name: 'id', type: 'int', handlers: [{ position: 'left', type: 'source' }, { position: 'right', type: 'source' }] },
				{ name: 'name', type: 'varchar(250)' },
				{ name: 'length', type: 'int' },
				{ name: 'release_dt', type: 'date' },
				{ name: 'synopsis', type: 'text' },
			],
		}
	},
	{
		id: '4', position: { x: 675.83, y: 200.66 }, type: 'customNode',
		data: {
			label: 'Movie Genre',
			rows: [
				{ name: 'movie_id', type: 'int', handlers: [{ position: 'left', type: 'target' }] },
				{ name: 'genre_id', type: 'int' },
			],
		}
	},
	{
		id: '5', position: { x: 337.92, y: 378.44 }, type: 'customNode',
		data: {
			label: 'Distribution',
			rows: [
				{ name: 'movie_id', type: 'int', handlers: [{ position: 'right', type: 'target' }] },
				{ name: 'crew_member_id', type: 'int', handlers: [{ position: 'left', type: 'target' }] },
				{ name: 'role', type: 'text' },
			],
		}
	},
	{
		id: '6', position: { x: 76, y: 230 }, type: 'customNode',
		data: {
			label: 'Crew Member',
			rows: [
				{ name: 'id', type: 'int', handlers: [{ position: 'right', type: 'source' }] },
				{ name: 'name', type: 'varchar(250)' },
				{ name: 'gender', type: 'char(5)' },
				{ name: 'birth_date', type: 'date' },
				{ name: 'birth_place', type: 'varchar(250)' },
				{ name: 'biography', type: 'text' },
			],
		}
	},
	{
		id: '7', position: { x: 675.83, y: 64.71 }, type: 'customNode',
		data: {
			label: '',
			rows: [
				{ name: 'id', type: 'int' },
				{ name: 'name', type: 'text' },
			],
		}
	}
];

const initialEdges: Edge[] = [
	{ id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
	{ id: 'e2-3', source: '3', target: '2', sourceHandle: 'id-left', targetHandle: 'movie_id-left', type: 'smoothstep' },
	{ id: 'e3-4', source: '3', target: '4', sourceHandle: 'id-right', type: 'smoothstep' },
	{ id: 'e3-5', source: '3', target: '5', sourceHandle: 'id-right', type: 'smoothstep' },
	{ id: 'e5-6', source: '6', target: '5', targetHandle: 'crew_member_id-left', type: 'smoothstep' },
];

export default function DiagramFlow({ cardRef }: Props) {
	const { fitView, getViewport, setViewport } = useReactFlow();
	const store = useStoreApi();

	// weird bug cause of the custom type
	if (process.env.NODE_ENV === "development") {
		store.getState().onError = (code, message) => {
			if (code === "002") {
				return;
			}
			console.warn(message);
		};
	}

	function handleResize() {
		fitView();

		let card = cardRef.current.getBoundingClientRect()
		let width = window.innerWidth
		let view = getViewport();

		if (width < 800) {
			view.y = card.height + 48;
		} else {
			view.x = card.right * 0.8;
		}

		setViewport(view);
	};

	useEffect(() => {
		

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [fitView]);

	return (
		<div className='ReactFlow'>
			<ReactFlow
				nodes={initialNodes}
				edges={initialEdges}
				nodeTypes={nodeTypes}
				preventScrolling={false}
				panOnDrag={false}
				nodesDraggable={false}
				onInit={handleResize}
			>
				<Background color="#ccc" variant={BackgroundVariant.Dots} />
			</ReactFlow>
		</div>
	)
}