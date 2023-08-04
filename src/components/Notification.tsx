import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface NotificationConfig {
	message: string;
	type: 'error' | 'info' | 'success';
	description?: string;
}

function Notification() {
	const notificationConfig = useSelector((state: RootState) => state.data.notification);
	const [api, contextHolder] = notification.useNotification();

	useEffect(() => {
		if (notificationConfig) {
			api[notificationConfig.type]({
				message: notificationConfig.message,
				description: notificationConfig.description,
				placement: 'rightBottom' as NotificationPlacement,
			});
		}
	}, [notificationConfig, api]);

	return <>{contextHolder}</>;
}

export default Notification;
