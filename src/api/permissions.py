from rest_framework.permissions import BasePermission

class IsOwnerOrReadOnly(BasePermission):
    message = "You must be the owner of this object"
    my_safe_method = ['POST', 'UPDATE', 'DELETE']

    def has_object_permission(self, request, view, obj):
        if request.method in self.my_safe_method:
            return True
        return obj.author == request.user
