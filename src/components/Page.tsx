import { Layout } from 'antd';
import DataTable from './DataTable';
import Map from './Map';
const { Sider, Content } = Layout;

function Page() {
	return (
		<Layout hasSider style={{ height: '100vh' }}>
			<Sider width={600} style={{ padding: '5px' }}>
				<DataTable />
			</Sider>
			<Content>
				<Map />
			</Content>
		</Layout>
	);
}

export default Page;
