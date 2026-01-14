<?php include("conexion.php"); ?>
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>Agregar Reserva</title></head>
<body>
  <h2>Registrar nueva reserva</h2>
  <form method="POST">
    ID Usuario: <input type="number" name="id_usuario" required><br>
    ID Horario: <input type="number" name="id_horario" required><br>
    Cantidad de pasajeros: <input type="number" name="pasajeros" required><br>
    Total pago: <input type="number" step="0.01" name="total" required><br>
    <button type="submit" name="guardar">Guardar</button>
  </form>

  <?php
  if (isset($_POST['guardar'])) {
      $id_usuario = $_POST['id_usuario'];
      $id_horario = $_POST['id_horario'];
      $pasajeros = $_POST['pasajeros'];
      $total = $_POST['total'];
      $sql = "INSERT INTO reservas (id_usuario, id_horario, cantidad_pasajeros, total_pago)
              VALUES ('$id_usuario', '$id_horario', '$pasajeros', '$total')";
      if ($conn->query($sql) === true) {
          echo " Reserva agregada correctamente.";
      } else {
          echo " Error: " . $conn->error;
      }
  }
?>
</body>
</html>