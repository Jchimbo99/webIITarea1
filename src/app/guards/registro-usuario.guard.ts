import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuarioComponent } from '../components/registro-usuario/registro-usuario.component';

export const registroUsuarioGuard: CanDeactivateFn<RegistroUsuarioComponent> 
= (component, currentRoute, currentState, nextState) => {
  if (component.camposVacios()) {
    return confirm('Hay cambios sin guardar. ¿Estás seguro de que deseas abandonar el formulario?');
  }
  return true;
};
