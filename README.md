# CropZ 
Intelligent Crop Recommendation & Climate Forecasting System

AgriVision AI is an AI-powered agricultural decision support platform that helps farmers select the best crop to cultivate based on soil nutrients, climate conditions, and economic demand.

The system combines machine learning, real-time weather APIs, and predictive analytics to maximize yield, profit, and sustainability.

🚀 Features
🌱 Crop Recommendation

Predicts the best crop to grow based on:

Nitrogen (N)
Phosphorus (P)
Potassium (K)
Temperature
Humidity
pH level
Rainfall

Uses a trained Machine Learning model for accurate recommendations.

🌦 Climate Prediction

Predicts climate conditions using:
Historical weather dataset (10 years)
Real-time weather API integration

Outputs predicted:

Temperature
Humidity
Rainfall trends

💰 Revenue Optimization

Suggests crops that provide:
Maximum yield
Maximum market revenue
The system accounts for local demand-supply factors to avoid oversupply.

🧪 Fertilizer Recommendation
Recommends the most suitable fertilizer based on:
Soil nutrients
Soil type
Crop type

🔊 Voice Assistant

Integrates AI voice output using
ElevenLabs

Farmers can hear recommendations instead of reading them.

🧠 Machine Learning Models

The project uses:

Random Forest Classifier
Data preprocessing pipelines
Feature engineering for soil and climate attributes

Models trained using datasets from:

Kaggle crop recommendation datasets
Historical weather datasets

🏗 System Architecture
User Interface (HTML Dashboard)
        ↓
Backend API (Python Flask)
        ↓
Machine Learning Models
        ↓
Weather API + Dataset
        ↓
Prediction Results
⚙ Tech Stack
Frontend

HTML
CSS
JavaScript

Backend
Python
Flask

Machine Learning

Scikit-learn
Pandas
NumPy
APIs

Weather API (real-time climate data)

Voice AI from ElevenLabs

📂 Project Structure

```
AgriVisionAI/
├── app.py
├── backend.py
├── models/
│   ├── trained_model.pkl
│   └── fertilizer_model.pkl
├── datasets/
│   ├── Crop_recommendation.csv
│   └── Fertilizer Prediction.csv
├── templates/
│   └── index.html
├── train_crop_model.py
├── train_fertilizer_model.py
└── README.md
```

🧪 Installation

Clone the repository

git clone https://github.com/yourusername/AgriVisionAI.git
cd AgriVisionAI

Install dependencies

pip install pandas numpy scikit-learn flask joblib
▶ Run the Application

Start backend server

python backend.py

Open browser:

http://127.0.0.1:5000
📊 Model Training

Train crop recommendation model

python train_crop_model.py

Train fertilizer recommendation model

python train_fertilizer_model.py
📈 Example Prediction

Input:

N = 90
P = 42
K = 43
Temperature = 22°C
Humidity = 80%
pH = 6.5
Rainfall = 200mm

Output:

Recommended Crop: Rice
Suggested Fertilizer: Urea
Expected Yield: High
🌍 Future Improvements

Satellite data integration

Pest detection system

Mobile application

Market price prediction

Climate disaster warning system

👨‍💻 Contributors

Sanjit Srujan G A

📜 License

This project is licensed under the MIT License.
