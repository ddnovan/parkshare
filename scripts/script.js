let correosRegistrados = ["test@ull.edu.es"];

        function procesarRegistro() {
            const nombre = document.getElementById('reg-nombre').value;
            const correo = document.getElementById('reg-correo').value;
            const pass = document.getElementById('reg-pass').value;
            const divError = document.getElementById('error-registro');

            // Resetear error
            divError.classList.add('oculto');
            divError.innerText = "";

            // Validaciones (Pruebas de Aceptación)
            if (!nombre || !correo || !pass) {
                divError.innerText = "Por favor, completa todos los campos.";
                divError.classList.remove('oculto');
                return;
            }

            if (correosRegistrados.includes(correo)) {
                divError.innerText = "Este correo ya está registrado en el sistema.";
                divError.classList.remove('oculto');
                return;
            }

            if (pass.length < 8) {
                divError.innerText = "La contraseña debe tener al menos 8 caracteres.";
                divError.classList.remove('oculto');
                return;
            }
            correosRegistrados.push(correo);
            const primerNombre = nombre.split(' ')[0];
            document.getElementById('nombre-usuario-header').innerText = primerNombre;

            document.getElementById('vista-registro').classList.add('oculto');
            document.getElementById('vista-seleccion').classList.remove('oculto');
        }

        function seleccionarPlaza(edificio, direccion, precio) {
            alert(`--- RESERVA INICIADA ---\n\nEdificio: ${edificio}\nDirección: ${direccion}\nPrecio Total: ${precio}€\n\n(Derivando a la pasarela de pago de Hugo...)`);
        }

        let plazaReservada = false;

      function seleccionarPlaza(edificio, direccion, precio) {

          if (plazaReservada) {
              alert("Esta plaza ya está reservada.");
              return;
          }

          document.getElementById('vista-seleccion').classList.add('oculto');
          document.getElementById('vista-reserva').classList.remove('oculto');

          document.getElementById('reserva-plaza').value = edificio;
          document.getElementById('reserva-direccion').value = direccion;
          document.getElementById('reserva-precio').value = precio + "€";
      }

      function confirmarReserva() {

          const fecha = document.getElementById('fecha-reserva').value;
          const mensaje = document.getElementById('mensaje-reserva');

          mensaje.classList.add('oculto');
          mensaje.innerText = "";

          if (!fecha) {
              mensaje.innerText = "Selecciona una fecha para la reserva.";
              mensaje.classList.remove('oculto');
              return;
          }

          plazaReservada = true;

          document.getElementById('vista-reserva').classList.add('oculto');
          document.getElementById('vista-pago').classList.remove('oculto');
      }

      function procesarPago() {

          const titular = document.getElementById('titular').value;
          const tarjeta = document.getElementById('tarjeta').value;
          const cvv = document.getElementById('cvv').value;

          const mensaje = document.getElementById('mensaje-pago');

          mensaje.classList.add('oculto');
          mensaje.innerText = "";

          if (!titular || !tarjeta || !cvv) {
              mensaje.innerText = "Completa todos los datos de pago.";
              mensaje.classList.remove('oculto');
              return;
          }

          if (tarjeta.length < 16) {
              mensaje.innerText = "El número de tarjeta no es válido.";
              mensaje.classList.remove('oculto');
              return;
          }

          if (cvv.length < 3) {
              mensaje.innerText = "El CVV debe tener 3 dígitos.";
              mensaje.classList.remove('oculto');
              return;
          }

          alert("✅ Pago realizado correctamente.\n\nLa reserva ha sido confirmada.");

          document.getElementById('vista-pago').classList.add('oculto');
          document.getElementById('vista-seleccion').classList.remove('oculto');
      }