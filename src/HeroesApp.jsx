import { AuthProvider } from './authentication/context/AuthProvider';
import {AppRouter} from './router/AppRouter';

export const HeroesApp = () => {
  return (
    <AuthProvider>
    
      <AppRouter/>
    
    </AuthProvider>
  )
}
