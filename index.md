# What is Expertise Style Transfer?
Prvasive cognitive bias exhibited across all domains can lead to discrepancies between an expert’s advice and a layman’s understanding of it. To tackle this problem, we propose a new task of text style transfer between expert language and layman language, namely **Expertise Style Transfer** (EST), and contribute a manually annotated dataset in the medical domain for this task.

# How we construct this dataset?
The dataset is derived from human-written medical references, [The Merck Manuals](https://www.msdmanuals.com/), which
include two parallel versions of texts, one tailored for consumers and the other for health care professionals. For automatic evaluation, we hire doctors to annotate the parallel sentences between the two versions. An exampple is shown bellow.
![data example](/data_example.png)

# Dataset download
You can download the EST dataset on [link to dataset](https://google.com).  
`train.csv` contains xxx training samples, has the following columns:
```
sent_text
page_category
page_title
topic
style
```
