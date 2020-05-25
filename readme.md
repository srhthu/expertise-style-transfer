### Task Introduction
Expertise Style Transfer (EST) is a new task of text style transfer between expert language and layman language, which is to tackle the problem of discrepancies between an expert's advice and a layman's understanding of it. We contribute a manually annotated dataset, namely MSD, in the medical domain to promote research into this task.

### Dataset Description
We provide a training set with non-parallel sentences in expert and layman styles, and a parallel test set for validation. Each sentence is attached a UMLS concept list to encourage knowledge-aware style transfer.

## Data Format
Each line of the `train.txt` and `test.txt` file is a dictionary object in JSON with the followng keys:
```
    text: the sentence text
    label: 0 for expert and 1 for layman style
    concepts: a list of concepts in the format {
        "range": the start and end word position of the concept
        "term": the term of the concept
        "cui": the CUI codes defined by UMLS
    }
```