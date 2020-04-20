
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
`train.csv` contains xxx training samples, which has the following columns:
```
sent_text
page_category
page_title
topic
style
```
`test.csv` contains 675 test samples, each row of which is `sent_text_expertise` and `sent_text_laymen` joint by `\t`

## Contact
If you have any question, please contact @srhthu

<script type="text/javascript" src="jquery-3.5.0.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		console.log('hi');
		$('a[href^="http"]').each(function() {
			$(this).attr('target', '_blank');
		});
	});
</script>
