export default class UserInfo {
    request = async(url, method = "GET", body = null, headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body)
                headers = {
                    'Content-Type': 'application/json',
                    'access-control-allow-origin' : 'https://ticket-selli.uc.r.appspot.com'
                }
            }

            const response = await fetch(`http://31.184.254.106/${url}`,{method, body, headers})
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

