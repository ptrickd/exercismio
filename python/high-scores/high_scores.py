def latest(scores):
    return scores[len(scores) - 1]

def personal_best(scores):
    best_score = 0

    for score in scores:
        if score > best_score:
            best_score = score

    return best_score 

def personal_top_three(scores):
    list_top = []
    num_of_item = 0

    if len(scores) > 2:
        num_of_item = 3
    else:
        num_of_item = len(scores)

    scores.sort(reverse = True)
    for x in range(0, num_of_item):
        list_top.append(scores[x])
    
    return list_top

