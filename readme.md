This project is a simple introduction to using Langchain with ArcGIS. 

Created by Andrew Turner @ Esri for DevSummit 2024

[Slides](https://esriis-my.sharepoint.com/:p:/g/personal/andr7059_esri_com/ERydBirgxSRDhi-CW8_DvSsB0PL9OwH1Q6gH7HypJsNlnQ?e=0rRchp)

## Getting Started

### Environment variables

1. Copy `env.example` to `.env.dev`
2. Add your relevant keys & URLs to the configuration

### Python

1. Change to `cd langchain-py`
2. Install requirements in console `pip install -U -r requirements.txt`
3. Open `example_start.ipynb`
4. Run the cells

### Javascript

1. Change to `cd langchain-js`
2. Install requirements in console `npm i`
3. Run the example `node example_start.js`


## Using Tools

You can make your agents more intelligent by adding structured tools. A Tool is simply a Python function that is included in the LLM prompt. The output may include calling the function, which Langchain will do and then include the response back to the LLM for final reasoning.

2. Open `example_tools.ipynb`
3. Run the cells