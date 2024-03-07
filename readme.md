This project is a simple introduction to using Langchain with ArcGIS. 

Created by Andrew Turner @ Esri for DevSummit 2024

## Getting Started

1. Install requirements in console `pip install -U -r requirements.txt`
2. Open `example_start.ipynb`
3. Run the cells

This is a simple introduction

## Using Tools

You can make your agents more intelligent by adding structured tools. A Tool is simply a Python function that is included in the LLM prompt. The output may include calling the function, which Langchain will do and then include the response back to the LLM for final reasoning.

2. Open `example_tools.ipynb`
3. Run the cells