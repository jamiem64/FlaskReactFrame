from ratelimit import limits, sleep_and_retry

# 8 calls per minute
CALLS = 8
RATE_LIMIT = 60

@sleep_and_retry
@limits(calls=CALLS, period=RATE_LIMIT)
def check_limit():
    ''' Empty function just to check for calls to API '''
    return