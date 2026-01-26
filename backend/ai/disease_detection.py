import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), "leaf_disease_model.h5")

model = None
CLASS_NAMES = ['Healthy', 'Rust', 'Blight', 'Leaf Spot']

try:
    model = tf.keras.models.load_model(MODEL_PATH)
except:
    print("⚠ Model failed to load")

def detect_disease(img_file):
    if model is None:
        return {"error": "Model Not Loaded"}

    img = image.load_img(img_file, target_size=(224, 224))
    img_array = image.img_to_array(img) / 255.
    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)[0]
    idx = np.argmax(prediction)

    return {
        "disease": CLASS_NAMES[idx],
        "confidence": float(prediction[idx])
    }
