import React from 'react';
import './error-indicator.css';
import { Alert, Button } from 'antd';


const ErrorIndicator = () => {
    return (
        <Alert
            message="Что-то пошло не так, но мы уже работает над этим!"
            showIcon
            description=""
            type="error"
            action={
                <Button size="small" danger>
                    Detail
                </Button>
            }
        />
    );
};

export default ErrorIndicator;
