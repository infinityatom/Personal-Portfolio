import { Handle, Position } from 'reactflow';


export type DiagramTableRow = {
	name: string;
	type: string;
	handle_left?: boolean;
	handle_right?: boolean;
	handle?: Array<typeof Handle>;
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
							<td className="name">{row.name}</td>
							<td className="type" data-type={row.type}>{row.type}</td>
						</tr>
					)}
				</tbody>
			</table>
			{data.rows.map(row =>
				<div key={row.name}>
					{row.handle_left === true && <>
						<Handle type="source" position={Position.Left} id='sl' />
						<Handle type="target" position={Position.Left} id='tl' />
					</>}
					{row.handle_right === true && <>
						<Handle type="source" position={Position.Right} id='sr' />
						<Handle type="target" position={Position.Right} id='tr' />
					</>}
				</div>
			)}
		</div>
	);
}

export default CustomNode;