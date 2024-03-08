import { Handle, HandleType, Position } from 'reactflow';

import './CustomNode.css'

type CustomHandle = {
	position: 'left' | 'right'
	type: HandleType
}

export type DiagramTableRow = {
	name: string;
	type: string;
	handlers?: CustomHandle[];
}

export type DiagramTable = {
	label: string;
	rows: DiagramTableRow[];
}

function CustomNode({ data }: { data: DiagramTable }) {

	return (
		<div className='CustomNode'>
			<table>
				<thead>
					<tr>
						<th colSpan={2}>{data.label}</th>
					</tr>
				</thead>
				<tbody>
					{data.rows.map(row =>
						<tr className="row" key={row.name}>
							<td className="name">
								{row.handlers && row.handlers.map((handle, i) => {
									if (handle.position == 'left') {
										return <Handle
											type={handle.type}
											position={Position.Left}
											id={row.name + '-left'}
											key={i}
										/>
									}
								})}
								{row.name}
							</td>
							<td className="type" data-type={row.type}>
								{row.handlers && row.handlers.map((handle, i) => {
									if (handle.position == 'right') {
										return <Handle
											type={handle.type}
											position={Position.Right}
											id={row.name + '-right'}
											key={i}
										/>
									}
								})}
								{row.type}
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default CustomNode;