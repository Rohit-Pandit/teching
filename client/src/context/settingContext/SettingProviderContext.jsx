import React, {useContext,useEffect,useState} from 'react';
import settingContext from '../../context/settingContext/settingContext.js';
import { getSettings } from '../../services/settings.api.js';


const SettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSettings = async () => {
        try{
          setLoading(true);
          setError(null);
        const data = await getSettings();
        setSettings(data);
        }
        catch (error) {
          setError(error.message);
        }
        finally {
          setLoading(false);
        }
    }

    useEffect(() => {
        fetchSettings();
    }, []);

    return (
        <settingContext.Provider value={{ settings, loading, error }}>
            {children}
        </settingContext.Provider>
    );

}

export default SettingsProvider;