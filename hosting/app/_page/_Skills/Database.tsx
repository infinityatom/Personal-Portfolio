'use client'

import ReactFlow, { Node, Edge, Background, BackgroundVariant } from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode, { DiagramTable } from './_Database/CustomNode';

import './_Database/style.css';

const nodeTypes = { customNode: CustomNode };

const initialNodes: Node<DiagramTable>[] = [
	{
		id: '1', position: { x: 0, y: 0 }, type: 'customNode',
		data: {
			label: 'User',
			rows: [
				{ name: 'id', type: 'int', handle_right: true },
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
				{ name: 'user_id', type: 'int', handle_left: true },
				{ name: 'movie_id', type: 'int', handle_left: true },
			],
		}
	},
	{
		id: '3', position: { x: 337.92, y: 157.52 }, type: 'customNode',
		data: {
			label: 'Movie',
			rows: [
				{ name: 'id', type: 'int', handle_left: true, handle_right: true },
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
				{ name: 'movie_id', type: 'int', handle_left: true },
				{ name: 'genre_id', type: 'int' },
			],
		}
	},
	{
		id: '5', position: { x: 337.92, y: 378.44 }, type: 'customNode',
		data: {
			label: 'Distribution',
			rows: [
				{ name: 'movie_id', type: 'int', handle_right: true },
				{ name: 'crew_member_id', type: 'int', handle_left: true },
				{ name: 'role', type: 'text' },
			],
		}
	},
	{
		id: '6', position: { x: 76, y: 230 }, type: 'customNode',
		data: {
			label: 'Crew Member',
			rows: [
				{ name: 'id', type: 'int', handle_right: true },
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
	{ id: 'e1-2', source: '1', target: '2', sourceHandle: 'sr', targetHandle: 'tl', type: 'smoothstep' },
	{ id: 'e2-3', source: '2', target: '3', sourceHandle: 'sl', targetHandle: 'tl', type: 'smoothstep' },
	{ id: 'e3-4', source: '3', target: '4', sourceHandle: 'sr', targetHandle: 'tl', type: 'smoothstep' },
	{ id: 'e3-5', source: '3', target: '5', sourceHandle: 'sr', targetHandle: 'tr', type: 'smoothstep' },
	{ id: 'e5-6', source: '5', target: '6', sourceHandle: 'sl', targetHandle: 'tr', type: 'smoothstep' },
];

export default function Database() {
	return (
		<article id='Database'>
			<div className='Card'>
				<h1 className='title'>Databas</h1>
				<p className='description'>Whether it's for small-scale projects or large enterprises, I prioritize data integrity, security, and scalability.<br />
					<br />My expertise spans various database management systems (DBMS), such as SQL and NoSQL, ensuring reliable, high-performance solutions tailored to your requirements.
				</p>
			</div>
			<div className='ReactFlow'>
				<ReactFlow
					nodes={initialNodes}
					edges={initialEdges}
					nodeTypes={nodeTypes}
					preventScrolling={false}
					fitView
				>
					<Background color="#ccc" variant={BackgroundVariant.Dots} />
				</ReactFlow>
			</div>
		</article>
	)
}