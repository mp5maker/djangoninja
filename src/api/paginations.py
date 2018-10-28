from rest_framework.pagination import(
    LimitOffsetPagination,
    PageNumberPagination
)

class ApiLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 1
    max_limit = 2

class ApiPageNumberPagination(PageNumberPagination):
    page_size = 5