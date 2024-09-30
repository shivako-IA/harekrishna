import numpy as np
import matplotlib.pyplot as plt

# Generar datos para la espiral
theta = np.linspace(0, 4 * np.pi, 1000)
r = theta**1.5  # Cambia el exponente para ajustar el "apretamiento" de la espiral
x = r * np.cos(theta)
y = r * np.sin(theta)

# Crear la figura
plt.figure(figsize=(8, 8))
plt.plot(x, y, color='white', lw=2)  # Color blanco para el espiral

# Ajustar el fondo
plt.gca().set_facecolor('black')  # Fondo negro
plt.gca().spines['polar'].set_visible(False)  # Quitar los ejes

# Quitar los ejes y la cuadrícula
plt.axis('off')

# Guardar la figura como una imagen
plt.savefig("espiral_plot.png", bbox_inches='tight', pad_inches=0, dpi=300)  # Guardar con alta resolución

# Mostrar la figura
plt.show()
