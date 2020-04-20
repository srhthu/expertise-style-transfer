
## What is the task of Expertise Style Transfer?
**Expertise Style Transfer** (EST) is a new task of text style transfer between expert language and layman language, which is to tackle the problem of discrepancies between an expert’s advice and a layman’s understanding of it. This problem is usually caused by the prvasive cognitive bias exhibited across all domains.
We contribute a manually annotated dataset, namely **MSD**, in the medical domain to promote researches into this task.
[Paper Link](https://google.com)

## How we construct this dataset?
The dataset is derived from human-written medical references, [The Merck Manuals](https://www.msdmanuals.com/), which
include two parallel versions of texts, one tailored for consumers and the other for health care professionals. For automatic evaluation, we hire doctors to annotate the parallel sentences between the two versions. An exampple is shown bellow.
![data example](/data_example.png)

## Dataset download
You can download the EST dataset on this [dataset link](https://drive.google.com/open?id=15n14BcbZDc7FX-PeRlbjCV_kAbDDjePw).  
`train.txt` contains `130349` expert and `114674` layman sentences. Each line of this file is a JSON serialized dictionary object with the following keys:
```
text: a sentence string with word tokenization
label: 0 for expert and 1 for layman
concepts: a list of concepts
```
The `concepts` field gives all medical named entities that are linked to **Unified Medical Language System** (UMLS) by utilizing  [QuickUMLS](https://github.com/Georgetown-IR-Lab/QuickUMLS) tools.
Each concept is a dictionary object with the folloing keys:
```
range: a tuple consisting of the start and end word position
term: concept string
cui: a list of Concept Unique Identifiers defined by UMLS
```
`test.txt` contains 675 pairs of parallel sentences. Each line of this file shares the same format of `train.txt`. But rows with odd numbers are expert sentences and the next even-number rows are corresponding layman sentences.

## Contact
If you have any question, please contact 

<script type="text/javascript" src="jquery-3.5.0.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		console.log('hi');
		$('a[href^="http"]').each(function() {
			$(this).attr('target', '_blank');
		});
	});
</script>
