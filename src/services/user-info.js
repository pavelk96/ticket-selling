export default class UserInfo {
    request = async(url, method = "GET", body = null, headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body)
                headers = {
                    'Content-Type': 'application/json',
                    'Access-Control' : 'https://ticket-selli.uc.r.appspot.com'
                }
            }

            const response = await fetch(`http://82.148.30.66:5000${url}`,{method, body, headers})
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }
            return data;

        } catch (e) {
            throw e;
        }
    };

};

