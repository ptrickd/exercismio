class Matrix:
    def __init__(self, matrix_string):
        self.matrix_string = matrix_string

    def row(self, index):
        string_splited = self.matrix_string.split('\n')
        outer_matrix = []
        inner_matrix = []

        for x in string_splited:
            inner_matrix = x.split()

            for y in range(0, len(inner_matrix)):
                inner_matrix[y] = int(inner_matrix[y])

            outer_matrix.append(inner_matrix)
               
        return outer_matrix[index-1]

    def column(self, index):
        string_splited = self.matrix_string.split('\n')
        row_matrix = []
        substr_splited = []
        outer_matrix = []
        inner_matrix = []

        for item in string_splited:
            substr_splited = item.split()

            for sub_item in substr_splited:
                inner_matrix.append(int(sub_item))

            row_matrix.append(inner_matrix)
            inner_matrix = []

        if len(row_matrix) > 1:
            num_cols = len(row_matrix[0])
        else:
            num_cols = 1
        
        for x in range(0, num_cols):

            for y in row_matrix:
                inner_matrix.append(y[x])

            outer_matrix.append(inner_matrix)
            inner_matrix = []

        return outer_matrix[index - 1]

