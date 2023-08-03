


def parse_stoic_output(input, output):
        i = 1
        for key, value in input.items():
            output += f"{value}{key}"
            if i < len(input):
                output += ' + '
            i += 1
        return output